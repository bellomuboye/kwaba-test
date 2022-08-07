import { createMocks, RequestMethod } from 'node-mocks-http';
import test, { describe } from 'node:test';
import handleSubmitRequest from '../pages/api/submit-request';

describe("/api/submit-request", () => {
    test('returns a message with the submitted details', async () => {
        const { req, res } = createMocks ({
            method: 'POST',
            query: {
                status: "Looking to renew my rent", 
                monthly: "5000", 
                request: "100", 
                plan: "1 Month"
            }
        });

        await handleSubmitRequest(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                message: "Details was sent for pre-Approval"
            })
        )
    })
})