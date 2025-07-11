export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'T-Shirt Customization API is running'
  });
}