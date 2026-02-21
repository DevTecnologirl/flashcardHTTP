export interface HttpStatus {
  code: number
  title: string
  description: string
}

export const httpStatuses: HttpStatus[] = [
  {
    code: 100,
    title: "Continue",
    description: "O servidor recebeu parte da requisição e pode continuar."
  },
  {
    code: 101,
    title: "Switching protocols",
    description: "Mudança de protocolo(ex: HTTP --> Websocket)."
  },
  {
    code: 200,
    title: "OK",
    description: "A requisição foi processada com sucesso."
  },
  {
    code: 201,
    title: "CREATED",
    description: "Recurso criado (POST)."
  },
  {
    code: 202,
    title: "ACEPTED",
    description: "A requisição foi aceita. (ainda processando)"
  },
  {
    code: 204,
    title: "NO CONTENT",
    description: "Sucesso sem conteúdo."
  },
  {
    code: 400,
    title: "Bad Request",
    description: "Requisição inválida (erro no JSON, parâmetros errados)."
  },
  {
    code: 401,
    title: "Unauthorized",
    description: "Não autenticado (token inválido ou ausennte)."
  },
  {
    code: 403,
    title: "Forbindden",
    description: "Autenticado, porém sem permissão."
  },
  {
      code: 404,
      title: "Not Found",
      description: "O recurso solicitado não foi encontrado no servidor."
    },
  {
      code: 405,
      title: "Method not allowed",
      description: "Método HTTP NÃO PERMITIDO. (GET em rot de POST"
    },
    {
      code: 408,
      title: "Request Timeout",
      description: "Tempo de requisição expirou."
    },
  {
    code: 409,
    title: "Conflict",
    description: "Conflito dos dados (ex: user ja existente)."
  },
  {
    code: 422,
    title: "Unprocessable Entity",
    description: "Erro de validação."
  },
  {
    code: 429,
    title: "Too many Request",
    description: "Muitas requisições (rate limit)."
  },

  {
    code: 500,
    title: "Internal Server Error",
    description: "Erro genérico do backend. O servidor falhou ao processar a requisição."
  },
  {
    code: 501,
    title: "Not implemented",
    description: "Funcionalidade não implementada."
  },
  {
    code: 502,
    title: "Bad Gateway",
    description: "Servidor recebeu resposta inválida de outro servidor."
  },
  {
    code: 503,
    title: "Service Unavailable",
    description: "Serviço indisponível (manutenção ou sobrecarga)"
  },
  {
    code: 504,
    title: "Gateway timeout",
    description: "Servidor demorou para receber resposta de outro servidor."
  },
]
