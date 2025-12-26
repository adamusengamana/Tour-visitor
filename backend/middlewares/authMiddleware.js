const { z } = require('zod');
const schema = z.object({
    email: z.email(),
    password: z.string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(128, { message: 'Password must be at most 128 characters long' })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]+$/,
            { message: 'Password must include uppercase and lowercase letters, a number, a special character, and contain no spaces' }
        )
});
//name: z.string().min(2), age: z.number().int().min(18)
module.exports = (req, res, next) => {   
  const parsed = schema.safeParse(req.body);
  
  if (!parsed.success) 
    { const message = JSON.parse(parsed.error.message);
      return res.status(400).json({ error: message[0].message });}
    req.validatedBody = parsed.data; 
  // normalized payload for controllers/services
  if (!req.validatedBody.email || !req.validatedBody.password) {
    const err = new Error('Email and password are required');
    err.code = 'VALIDATION_ERROR';
    err.status = 400;
    return next(err);
  }
  next();
};

