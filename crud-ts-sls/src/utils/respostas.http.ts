export const lidarComRespostaDeSucesso = (statusCode: number, body?:object) => ({
    statusCode: statusCode,
    body: JSON.stringify(body)
  })