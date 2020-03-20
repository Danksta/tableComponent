/*
import namor from 'namor'

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}



const newPerson = () => {
    const statusChance = Math.random()
    return {
        candidateName: namor.generate({ words: 1, numbers: 0 }),
        candidateId: namor.generate({ words: 0, numbers: 5 }),
        organization: namor.generate({ words: 1, numbers: 0 }),
        assessment: namor.generate({ words: 1, numbers: 0 }),
        createdDate: Math.floor(Math.random() * 30),
        externalId: namor.generate({ words: 0, numbers: 5 }),
        lastActivity: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? 'relationship'
                : statusChance > 0.33
                ? 'complicated'
                : 'single',
    }
}

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}
*/
import namor from 'namor'

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

let i = -1

let data = {
    candidateName: ['wasim' , "shresht", "juneja"],
    candidateNameSecondary : [1,2,3],
    candidateId: [1, 2, 3, 3, 4, 56, 6, 7]
}

let returnData = function (data, field, i) {
    return data[field][i]
}

const newPerson = () => {
    const statusChance = Math.random()
    i = i + 1
    return {

        /*candidateName: namor.generate({ words: 1, numbers: 0 }),*/
        candidateName: returnData(data, "candidateName", i),
        candidateId: returnData(data, "candidateId", i),
        organization: namor.generate({words: 1, numbers: 0}),
        assessment: namor.generate({words: 1, numbers: 0}),
        createdDate: Math.floor(Math.random() * 30),
        externalId: namor.generate({words: 0, numbers: 5}),
        lastActivity: Math.floor(Math.random() * 100),
        firstName: namor.generate({words: 1, numbers: 0}),
        lastName: namor.generate({words: 1, numbers: 0}),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        test: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? 'relationship'
                : statusChance > 0.33
                ? 'complicated'
                : 'single',
    }
}

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson(),

                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }


    return makeDataLevel()
}
/*
export default function makeData(len = 5553) {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}*/
