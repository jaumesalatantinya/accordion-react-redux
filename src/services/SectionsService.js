class ContentProvider {

    static getSections () {
        const sections = [
            { id: 1, header: 'Section 1', content: 'Section 1 Accordion...'},
            { id: 2, header: 'Section 2', content: 'Section 2 Accordion...'},
            { id: 3, header: 'Section 3', content: 'Section 3 Accordion...'},
            { id: 4, header: 'Section 4', content: 'Section 4 Accordion...'}
        ];
        const delay = 1000;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], sections));
            }, delay);
            // Uncomment to se App error
            //reject(new Error('Error getSections from API'));
        });
    }
}

export default ContentProvider;
