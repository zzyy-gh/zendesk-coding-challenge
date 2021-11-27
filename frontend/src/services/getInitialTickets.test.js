import { cleanedValues } from "./getInitialTickets";

describe("getInitialTickets fetch function", () => {
  const mockData = [
    {
      tickets: [
        {
          id: 1,
          created_at: "2021-11-25T03:59:46Z",
          updated_at: "2021-11-25T03:59:47Z",
          subject: "Sample ticket: Meet the ticket",
          description:
            "Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
          priority: "normal",
          status: "open",
          requester_id: 903447208143,
          assignee_id: 903441863706,
          due_at: null,
        },
      ],
    },
  ];

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ mockData }),
    })
  );

  beforeEach(() => {
    fetch.mockClear();
  });

  test("non null data has the correct shape after cleaning", () => {
    const { data } = cleanedValues(200, mockData);
    expect(data).toMatchObject(mockData);
  });
});
