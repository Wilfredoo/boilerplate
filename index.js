const express = require("express");
const app = express();
const compression = require("compression");
const database = require("./database.js");
const cookieSession = require("cookie-session");
const passport = require("passport");
GoogleStrategy = require("passport-google-oauth20").Strategy;
FacebookStrategy = require("passport-facebook").Strategy;

let callback_URL;
if (process.env.FACEBOOK_SECRET !== undefined) {
    fbSecret = process.env.FACEBOOK_SECRET;
    callback_URL = process.env.CALLBACK_URL;
} else {
    callback_URL = "http://localhost:8080/facebook/callback";
}

app.use(compression());
app.use(express.static("public"));

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(require("body-parser").json());
app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

// passport.use(
//     new FacebookStrategy(
//         {
//             clientID: 464372870817604,
//             clientSecret: fbSecret,
//             callbackURL: callback_URL
//         },
//         function(accessToken, refreshToken, profile, done) {
//             console.log("accessToken", accessToken);
//             console.log("refreshToken", refreshToken);
//             return database
//                 .findOrCreateFacebookUser(profile.id, profile.displayName)
//                 .then(user => {
//                     done(null, profile);
//                 });
//         }
//     )
// );

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: GOOGLE_CLIENT_ID,
//             clientSecret: GOOGLE_CLIENT_SECRET,
//             callbackURL: "http://www.example.com/auth/google/callback"
//         },
//         function(accessToken, refreshToken, profile, cb) {
//             User.findOrCreate({ googleId: profile.id }, function(err, user) {
//                 return cb(err, user);
//             });
//         }
//     )
// );

// console logs these user and user ids in the different functions, see wat happens
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

app.get("/user", (req, res) => {
    res.json(req.user);
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

app.get("/loginFacebook", passport.authenticate("facebook"));

app.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
        failureRedirect: "/login"
    }),
    function(req, res) {
        res.redirect("/");
    }
);

// here ends passport code

app.get("/get", function(req, res) {
    console.log("hi friends");
});

app.get("/getEvents", function(req, res) {
    return database.getEvents().then(data => {
        res.json({
            data
        });
    });
});

app.get("/getEventDetails/:id", function(req, res) {
    return database.getEventDetails(req.params.id).then(data => {
        res.json({
            data
        });
    });
});

app.post("/submitEvent", (req, res) => {
    console.log("submit it", req.body);
    return database
        .submitEvent(
            req.body.title,
            req.body.address,
            req.body.hour,
            req.body.date0,
            req.body.date1,
            req.body.date2,
            req.body.date3,
            req.body.date4,
            req.body.date5,
            req.body.date6,
            req.body.repeats,
            req.body.description,
            req.body.cost,
            req.body.price
        )
        .then(() => {
            res.json({
                success: true
            });
        });

    res.json({
        success: true
    });
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8080);
