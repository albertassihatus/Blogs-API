const error = (req, res, _next) => {
    const message = 'Erro inesperado. Por favor, tente mais tarde';
  
    return res.status(401).json({ message });
  };
  
  module.exports = error;