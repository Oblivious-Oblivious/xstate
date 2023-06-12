const isNotMax = (context) => context.count < 10;
const isNotMin = (context) => context.count >= 0;

const counterMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOiwBdcA3MAYgEkA5AYQG0AGAXUVAAcB7WLkr98PEAA9EAZgBMANhKyAnPIAcAdgCsAGhABPRAFppaksq3SAjLK0BfO3rRY8hUhWp0AIgFE2XcQEhETEkSWMreQAWEjko2StNXQNjU3NLG3sHPXx+CDhxZxwCYkDBYVxRcSkEIwTZWNl4xO09Q1qbRSiM22yQItdiMkxKGjLgytDQGtUSKLV2KPVWlIQrRJIFtS1laW0HByA */
  initial: 'active',
  context: {
    count: 0
  },
  states: {
    active: {
      on: {
        INC: {
          actions: assign({ count: increment }),
          cond: isNotMax
        },
        DEC: {
          actions: assign({ count: decrement }),
          cond: isNotMin
        }
      }
    }
  }
});