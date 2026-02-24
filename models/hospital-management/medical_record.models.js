import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.Schema({},{timestamps:true})

export const MedicalReport = mongoose.model("MedicalReport", medicalRecordSchema)