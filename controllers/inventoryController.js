const inventoryModel = require("../models/InventoryModel")
const userModel = require("../models/userModel");

//create invetory
const createInventoryController=async(req,res)=>{
    try {
      const{email,inventoryType}=req.body
      //validation
      const user=await userModel.findOne({email})
      if(!user){
        throw new Error ('User Not Found')
      }
      // if(inventoryType==="in" && user.role !=='donor'){
      //   throw new Error ('Not a donor account')
      // }
      if(inventoryType ==="out" && user.role !== 'hospital')
      {
        throw new ErrorEvent('Not a hospital')
      }
      // if all validation checks successfully then save record
      const inventory=new inventoryModel(req.body)
      await inventory.save()
      return res.status(201).send({
        success:true,
        message:'New Blood Record Added'
      })
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success:false,
        message:'Error In Create Inventory API',
        error:error
      })
      
    }
}

const getInventoryController=async(req,res)=>{
  try {
    const inventory=await inventoryModel.find({organisation:req.body.userId}).populate("donor").populate("hospital").sort({createdAt:-1})
    //.populate method to show donor and hospital details with this request which donor do the request etc...
    return res.status(200).send({
      success:true,
      message:"get all records successfully",
      inventory,
    })
  } catch (error) {
    console.log(error);
    
    return res.status(500).send({
      success:false,
      message:"unable to get inventory data"
    })
  }


}
module.exports={createInventoryController,getInventoryController}