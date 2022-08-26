const express = require('express');
const morgan = require('morgan');
const { Prohairesis } = require('prohairesis');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 8080;

const mySQLString = 'mysql://bfa2d766f71175:55178591@us-cdbr-east-06.cleardb.net/heroku_3ffed68c71db44e?reconnect=true';
const database = new Prohairesis(mySQLString);


app
    
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())


    .post('/api/appointments', async (req, res) => {
        const body = req.body;
        await database.execute(`
            INSERT INTO appointments (
                first,
                last,
                phone,
                email,
                address,
                date,
                time,
                service,
                message,
                added
            ) VALUES (
                @first,
                @last,
                @phone,
                @email,
                @address,
                @date,
                @time,
                @service,
                @message,
                NOW()
            )
        `, {
            first: body.first,
            last: body.last,
            phone: body.phone,
            email: body.email,
            address: body.address,
            date: body.date,
            time: body.time,
            service: body.service,
            message: body.message,

        })
        res.json("Request Successful!");
    })


app
    
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())


    .post('/api/applications', async (req, res) => {
        const body = req.body;
        await database.execute(`
            INSERT INTO applications (
                first,
                last,
                dob,
                phone,
                address,
                email,
                workauth,
                background,
                insurance,
                vehicle,
                trailer,
                ride,
                available,
                position,
                time,
                monday,
                tuesday,
                wednesday,
                thursday,
                friday,
                saturday,
                weeklyhours,
                hourlypay,
                permit,
                training,
                communication,
                assemble,
                strength,
                measure,
                powertools,
                machinery,
                heights,
                carpentry,
                masonry,
                doors,
                demolition,
                drywall,
                electrical,
                plumbing,
                flooring,
                painting,
                murals,
                mounting,
                handtools,
                drills,
                saws,
                nailgun,
                vac,
                othertools,
                message,
                added
            ) VALUES (
                @first,
                @last,
                @dob,
                @phone,
                @address,
                @email,
                @workauth,
                @background,
                @insurance,
                @vehicle,
                @trailer,
                @ride,
                @available,
                @position,
                @time,
                @monday,
                @tuesday,
                @wednesday,
                @thursday,
                @friday,
                @saturday,
                @weeklyhours,
                @hourlypay,
                @permit,
                @training,
                @communication,
                @assemble,
                @strength,
                @measure,
                @powertools,
                @machinery,
                @heights,
                @carpentry,
                @masonry,
                @doors,
                @demolition,
                @drywall,
                @electrical,
                @plumbing,
                @flooring,
                @painting,
                @murals,
                @mounting,
                @handtools,
                @drills,
                @saws,
                @nailgun,
                @vac,
                @othertools,
                @message,
                NOW()
            )
        `, {
            first: body.first,
            last: body.last,
            dob: body.dob,
            phone: body.phone,
            address: body.address,
            email: body.email,
            workauth: body.workauth,
            background: body.background,
            insurance: body.insurance,
            vehicle: body.vehicle,
            trailer: body.trailer,
            ride: body.ride,
            available: body.available,
            position: body.position,
            time: body.time,
            monday: body.monday,
            tuesday: body.tuesday,
            wednesday: body.wednesday,
            thursday: body.thursday,
            friday: body.friday,
            saturday: body.saturday,
            weeklyhours: body.weeklyhours,
            hourlypay: body.hourlypay,
            permit: body.permit,
            training: body.training,
            communication: body.communication,
            assemble: body.assemble,
            strength: body.strength,
            measure: body.measure,
            powertools: body.powertools,
            machinery: body.machinery,
            heights: body.heights,
            carpentry: body.carpentry,
            masonry: body.masonry,
            doors: body.doors,
            demolition: body.demolition,
            drywall: body.drywall,
            electrical: body.electrical,
            plumbing: body.plumbing,
            flooring: body.flooring,
            painting: body.painting,
            murals: body.murals,
            mounting: body.mounting,
            handtools: body.handtools,
            drills: body.drills,
            saws: body.saws,
            nailgun: body.nailgun,
            vac: body.vac,
            othertools: body.othertools,
            message: body.message,

        })
        res.json("Application Successfully Submitted!");
    })

    .listen(port, () => console.log(`server listening on port ${port}`));