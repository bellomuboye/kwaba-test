import { Schema, model, models} from 'mongoose';

const preApprovalRequestSchema = new Schema({
    accomodationStatus: {
        type: String,
        required: true
    },
    rentAmount: {
        type: Number,
        required: true,
    },
    monthlyEarning: {
        type: Number,
        required: true,
    },
    monthlyPayment: {
        type: Number,
        required: true,
    },
    monthlyPlan: {
        type: String,
        required: true,
    }
});

const PreApprovalRequest = models.PreApprovalRequest || model('PreApprovalRequest', preApprovalRequestSchema);

export default PreApprovalRequest;