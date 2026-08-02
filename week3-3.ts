class CollegeLibrary {

    public static readonly libraryName: string = "SVECW Library";
    public static totalBooks: number = 0;

    public readonly bookId: string;
    public bookTitle: string;

    constructor(title: string, id: string) {
        this.bookTitle = title;
        this.bookId = id;

        CollegeLibrary.totalBooks++;
    }

    public static libraryInfo(): void {
        console.log(`Welcome to ${this.libraryName}`);
    }

    public showBook(): void {
        console.log(`Book Title : ${this.bookTitle}`);
        console.log(`Book ID    : ${this.bookId}`);
    }
}

// Static Members
console.log(CollegeLibrary.libraryName);
CollegeLibrary.libraryInfo();

// Objects
const book1 = new CollegeLibrary("Python Programming", "LIB101");
const book2 = new CollegeLibrary("Data Structures", "LIB102");

// Display
book1.showBook();
book2.showBook();

// Readonly Property
console.log(book1.bookId);
// book1.bookId = "LIB999"; // Error

// Static Property
console.log(`Total Books : ${CollegeLibrary.totalBooks}`);
