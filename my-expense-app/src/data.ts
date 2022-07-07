export interface IData {
  report: IReport[];
}

export interface IReport {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: ReportType;
}

export enum ReportType {
  INCOME = 'income',

  EXPENSE = 'expense',
}

export const data: IData = {
  report: [
    {
      id: '95a8dac0-0328-4e1b-b0a8-035199b064f1',
      source: 'Salary',
      amount: 521,
      created_at: new Date('2022-02-05T03:01:29Z'),
      updated_at: new Date('2021-09-15T11:44:56Z'),
      type: ReportType.INCOME,
    },
    {
      id: 'e6b8a023-bab9-40fb-ac16-9ad6290e71c8',
      source: 'Salary',
      amount: 328,
      created_at: new Date('2022-05-18T13:42:40Z'),
      updated_at: new Date('2022-04-23T18:57:36Z'),
      type: ReportType.INCOME,
    },
    {
      id: '35ed1241-daf4-4390-bc30-8f518751c3bd',
      source: 'Salary',
      amount: 426,
      created_at: new Date('2021-12-18T14:40:27Z'),
      updated_at: new Date('2022-06-01T15:48:32Z'),
      type: ReportType.EXPENSE,
    },
    {
      id: '74577a44-84ed-4241-b5b2-956a20f13097',
      source: 'Salary',
      amount: 744,
      created_at: new Date('2021-12-06T13:24:50Z'),
      updated_at: new Date('2021-11-18T12:16:01Z'),
      type: ReportType.INCOME,
    },
    {
      id: '602b2d48-7b42-416a-89b6-0ef62e54fe7e',
      source: 'Salary',
      amount: 896,
      created_at: new Date('2021-11-17T21:25:09Z'),
      updated_at: new Date('2021-07-23T04:01:52Z'),
      type: ReportType.EXPENSE,
    },
    {
      id: 'bb3bfb8b-4992-4429-95ae-c939e71ebf9d',
      source: 'Salary',
      amount: 212,
      created_at: new Date('2022-01-27T10:24:35Z'),
      updated_at: new Date('2022-03-02T10:56:15Z'),
      type: ReportType.EXPENSE,
    },
    {
      id: '4176cebe-95c4-4712-ac6a-d4afd675c2fd',
      source: 'Salary',
      amount: 521,
      created_at: new Date('2021-10-08T02:17:53Z'),
      updated_at: new Date('2021-07-24T12:31:25Z'),
      type: ReportType.INCOME,
    },
    {
      id: '83f89af4-1a53-4add-b4ab-2dace827ad66',
      source: 'Salary',
      amount: 216,
      created_at: new Date('2022-04-18T06:48:07Z'),
      updated_at: new Date('2021-10-03T22:45:53Z'),
      type: ReportType.INCOME,
    },
    {
      id: '1e526626-d727-4fc0-8a58-f479bc42943d',
      source: 'Salary',
      amount: 559,
      created_at: new Date('2022-01-22T19:34:58Z'),
      updated_at: new Date('2021-09-02T16:51:50Z'),
      type: ReportType.INCOME,
    },
    {
      id: 'b204648e-5092-4be4-bbb9-6abd6de600fc',
      source: 'Salary',
      amount: 139,
      created_at: new Date('2022-05-29T11:22:36Z'),
      updated_at: new Date('2022-04-09T17:32:31Z'),
      type: ReportType.INCOME,
    },
    {
      id: '368cfb2d-8f1e-4c84-8f37-6462fed5da80',
      source: 'Salary',
      amount: 825,
      created_at: new Date('2021-10-28T19:59:17Z'),
      updated_at: new Date('2021-09-07T16:37:19Z'),
      type: ReportType.EXPENSE,
    },
    {
      id: '277a0f33-3ea8-4b8b-8ec0-a0035ea37d4f',
      source: 'Salary',
      amount: 742,
      created_at: new Date('2021-11-17T09:55:22Z'),
      updated_at: new Date('2022-04-29T18:34:05Z'),
      type: ReportType.INCOME,
    },
    {
      id: 'b114d05e-9fad-4748-b653-c609101fa977',
      source: 'Salary',
      amount: 306,
      created_at: new Date('2022-05-12T23:21:08Z'),
      updated_at: new Date('2021-12-24T07:56:08Z'),
      type: ReportType.EXPENSE,
    },
    {
      id: '62c60adf-4d2f-4115-a41d-5c64f6709c39',
      source: 'Salary',
      amount: 262,
      created_at: new Date('2022-05-25T15:11:04Z'),
      updated_at: new Date('2021-08-30T21:22:44Z'),
      type: ReportType.INCOME,
    },
    {
      id: '1034a642-3f55-4a58-bb73-cb1386c3cacb',
      source: 'Salary',
      amount: 553,
      created_at: new Date('2021-07-06T01:00:01Z'),
      updated_at: new Date('2021-07-18T23:44:20Z'),
      type: ReportType.EXPENSE,
    },
    {
      id: '7b15c12a-872d-42b8-8b91-8106e79441ae',
      source: 'Salary',
      amount: 212,
      created_at: new Date('2022-02-20T01:19:34Z'),
      updated_at: new Date('2022-04-20T18:49:09Z'),
      type: ReportType.INCOME,
    },
    {
      id: 'd3e4d287-948a-45bf-bb83-cecfbdf92d1a',
      source: 'Salary',
      amount: 819,
      created_at: new Date('2022-01-25T03:06:36Z'),
      updated_at: new Date('2021-11-17T18:49:07Z'),
      type: ReportType.INCOME,
    },
    {
      id: '9efc71ff-0034-479e-a25d-8bb9154cd494',
      source: 'Salary',
      amount: 287,
      created_at: new Date('2022-01-26T19:06:03Z'),
      updated_at: new Date('2021-10-03T13:52:28Z'),
      type: ReportType.EXPENSE,
    },
    {
      id: '98eb49c4-496a-4c09-8a51-c838f8a94e72',
      source: 'Salary',
      amount: 952,
      created_at: new Date('2022-05-20T05:13:12Z'),
      updated_at: new Date('2021-08-20T14:56:05Z'),
      type: ReportType.INCOME,
    },
    {
      id: 'eeb46d74-1e6b-4ccb-af9b-3e889f96c3e5',
      source: 'Salary',
      amount: 850,
      created_at: new Date('2022-01-25T20:15:24Z'),
      updated_at: new Date('2022-07-24T07:05:31Z'),
      type: ReportType.INCOME,
    },
  ],
};
