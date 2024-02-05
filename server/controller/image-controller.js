import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8000';

let gfs,gridFsBucket;
const conn = mongoose.connection;
conn.once('open', () =>{
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs')
})

let gph,gridPhotoBucket;
conn.once('open', () =>{
    gridPhotoBucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName: 'photos'
    });
    gph = grid(conn.db, mongoose.mongo);
    gph.collection('photos')
})

export const uploadFile = async (request, response) => {
        if(!request.file){
            return response.status(404).json("File Not found")
        }

        const imageUrl = `${url}/file/${request.file.filename}`;
        console.log(imageUrl)
        return response.status(200).json(imageUrl);
}

export const getImage = async (request, response) => {
    try {

        const cont = await gfs.files.findOne({filename : request.params.filename.includes('.pdf')})
    
        if(cont === true){
            const file = await gfs.files.findOne({filename : request.params.filename});
            const readStream = gridFsBucket.openDownloadStream(file._id);
            readStream.pipe(response);
        }else {
            const file = await gph.files.findOne({filename : request.params.filename});
            console.log("Message from backend file object",file)
            const readStream = gridPhotoBucket.openDownloadStream(file._id);
            readStream.pipe(response);
        }
       
        // const file = await gfs.files.findOne({filename : request.params.filename.includes('.pdf')});
        // console.log("Message from backend file object",file)
        // const readStream = gridFsBucket.openDownloadStream(file._id);
        // readStream.pipe(response);
        
    } catch (error) {
        return response.status(500).json(error.message);
        
    }
}