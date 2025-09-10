import * as z from 'zod';

export const formHookSchema = z.object({
  fullName: z.string().min(1, { message: 'ត្រូវបំពេញឈ្មោះពេញ' }),
  phoneNumber: z.string().min(9, { message: 'លេខទូរស័ព្ទមិនត្រឹមត្រូវ' }),
});

export type FormHookSchema = z.infer<typeof formHookSchema>;
