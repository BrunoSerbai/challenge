import express from "express"

try {
    
} catch (error) {
    console.log("Error in controller", error)
}

export const changeVolume = async (req, res) => {
    try {
        const { placa, volume } = req.body
        
        if (!placa || !volume) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        
        res.status(200).json({ success: true, message: "Volume for the vehicle " + placa + " was changed to " + volume + "!" })
    } catch (error) {
        console.log("Error in changeVolume function", error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }   
}
