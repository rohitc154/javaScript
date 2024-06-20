const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4)
// If we start a scope then, we should write return
const newNums = myNums.filter((num) => {
    return num > 4
})

// console.log(newNums);

// ---------------------------------------------------

const books = [
    {
        title: 'Book One', genre: 'Fiction', Publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', Publish: 1992, edition: 2008
    },
    {
        title: 'Book Three', genre: 'History', Publish: 1999, edition: 2007
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', Publish: 1989, edition: 2010
    },
    {
        title: 'Book Five', genre: 'Science', Publish: 2009, edition: 2014
    },
    {
        title: 'Book Six', genre: 'Fiction', Publish: 1987, edition: 2010
    },
    {
        title: 'Book Seven', genre: 'History', Publish: 1989, edition: 1996
    },
    {
        title: 'Book Eight', genre: 'Science', Publish: 2011, edition: 2016
    },
    {
        title: 'Book Nine', genre: 'Non-Fiction', Publish: 1981, edition: 1989
    },
]

// const userBook = books.filter((bk) => bk.genre == 'Fiction');
const userBook = books.filter((bk) => bk.Publish >= 1990 && bk.genre == 'History')
console.log(userBook);