const onErrorInterceptor = (errors = {}) => {
  return (error) => {
    if (error.message === 'Network Error') {
      return Promise.reject({
        code: 'networkError',
        message: 'Falha na conexão',
      })
    }
    const e = {
      code: error.response?.data?.code,
      message: errors[error.response?.data?.code],
    }

    return Promise.reject(e)
  }
}

const onSuccessInterceptor = (respose) => respose.data

export default {
  onErrorInterceptor,
  onSuccessInterceptor,
}
