// project imports
import services from 'utils/mockAdapter';
import { users, chatHistories } from 'data/chat';

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/chat/users').reply(200, { users });

services.onPost('/api/chat/users/id').reply((config) => {
  try {
    const { id } = JSON.parse(config.data);
    const index = users.findIndex((x) => x.id === id);
    return [200, users[index]];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/chat/filter').reply(async (config) => {
  try {
    const { user } = JSON.parse(config.data);
    const result = chatHistories.filter((item) => item.from === user || item.to === user);
    return [200, result];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/chat/insert').reply((config) => {
  try {
    const { from, to, text, time } = JSON.parse(config.data);
    const result = chatHistories.push({ from, to, text, time });
    return [200, result];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/chat/users/modify').reply((config) => {
  try {
    const user = JSON.parse(config.data);
    if (user.id) {
      const index = users.findIndex((u) => u.id === user.id);
      if (index > -1) {
        users[index] = { ...users[index], ...user };
      }
    } else {
      users.push({ ...user, id: users.length + 1 });
    }
    return [200, []];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
