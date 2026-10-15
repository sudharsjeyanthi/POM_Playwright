
export class WebTableData {
    constructor(public name: string, public country: string) { }
}

export class UserFormData {
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public address: string,
        public city: string,
        public state: string,
        public pinCode: string
    ) { }
}

export class TestData {
    constructor(
        public title: string,
        public webTable: WebTableData,
        public form: UserFormData
    ) { }
}

export class DataProvider {
    static getData(): TestData[] {
        return [
            new TestData(
                'Sudharsana',
                new WebTableData('Cbe', 'India'),
                new UserFormData(
                    'Sudhars',
                    'hii',
                    'Jagadeesan',
                    'sud@gmail.com',
                    '123456',
                    '06, Sivaram nagar CBE, TN',
                    'CBE',
                    'TN',
                    '641015'
                )
            ),
        ];
    }
}