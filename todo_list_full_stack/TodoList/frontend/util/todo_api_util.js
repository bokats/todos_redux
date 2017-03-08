export const APIUtil = () => (
    $.ajax({
    method: 'GET',
    url: 'api/todos'
  }));
