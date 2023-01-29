import mongoose from 'mongoose';


export interface ITvshow {
    user: string,
    title:string,
    streamingApp:string,
    rating:number,
    review:string,
    createdAt: Date,
    updatedAt: Date
}

const TvshowSchema = new mongoose.Schema({


    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },

    title:{
        type:String,
        required:true
    },
    streamingApp:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    review:{
        type:String,
        required:true
    }
    

}, {
    timestamps: true
})

const Tvshow = mongoose.model<ITvshow>("Tvshow", TvshowSchema);

export default Tvshow;