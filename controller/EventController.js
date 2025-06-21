const Event = require("../modules/event");
const Ticket = require("../modules/ticketPlan");
const {uploadImageToCloudinary} = require("../utils/imageUploader")

exports.createEvent = async(req,res) => {
    try{

        const eventObject = req.body;

        const banner = req.files.banner;

        const image = await uploadImageToCloudinary(
                    banner,
                    process.env.FOLDER_NAME,
                    1000,
                    1000
        )
        eventObject.banner = image.secure_url;

        const ticketString = eventObject.ticketPlan;
        const ticketList = ticketString.split(",");
        eventObject.ticketPlan = ticketList;

        const userId = req.userId;
        eventObject.userId = userId;
        //TODO : save event in user
        const createdEvent = await Event.create(eventObject);

        return res.status(200).json({
            success:true,
            message: "Event created successfully",
            body: createdEvent
        })

    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


exports.createTicket = async(req,res) =>{
    try{

        const {name, price, remTicket} = req.body;
        const userId = req.userId;
        const createdTicket = await Ticket.create({name, price, remTicket, userId});

        return res.status(200).json({
            success:true,
            message:"Ticket created Successfully",
            body: createdTicket
        })

    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

exports.getEvent = async(req,res) => {
    try{
        const {eventId} = req.params;

        if(!eventId) {
            return res.status(400).json({
                success:false,
                message:"EventId required"
            })
        }

        const event = await Event.findById(eventId).populate("ticketPlan");

        return res.status(200).json({
            success:false,
            message:"Event found",
            body: event
        })
        
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}