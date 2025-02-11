const mongoose = require('mongoose');

// Define the schema for Job Applications
const application_schema = new mongoose.Schema(
    {
        applicant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',  // Reference to the User model (applicant)
            required: true,
        },
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',  // Reference to the Job model (the job being applied for)
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'interview', 'hired', 'rejected'],
            default: 'pending',
        },
        application_date: {
            type: Date,
            default: Date.now,
        },
        resume: {
            type: String, // Path to the applicant's resume file (if uploaded)
        },
        cover_letter: {
            type: String, // Path to the applicant's cover letter file (if uploaded)
        },
        comments: {
            type: String, // Additional comments for admin or recruiters
        },
    },
    { timestamps: true }  // Automatically adds createdAt and updatedAt fields
);

// Create and export the Application model
const Application = mongoose.model('Application', application_schema);
module.exports = Application; // ✅ Use CommonJS for compatibility
