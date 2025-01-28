

export function errorHandler(err, req, res, next) {
  console.error('Error:', err.message);

  const statusCode = err.statusCode || 500; // Default to 500 if status code not defined
  const message = err.message || 'Internal Server Error';

  // Send the error response
  res.status(statusCode).json({
      message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Hide stack trace in production
  });
}
