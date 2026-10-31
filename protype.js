class copyable {
    clone() {
        throw new Error ("clone() metodi implement qilinmagan ")
    }
}

class Docment extends copyable {
    constructor (id, title, content, author, tags){
        super ();
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.tags = tags;
    }

    clone(){
        return new Docmunt (
            this.id,
            this.title,
            this.content,
            this.author,
            [...this.tags]
        );
    }

    toString (){
        return`${this.id} | ${this.title} | ${this.content} | ${this.author} | [${this.tags.join(", ")}]`;
    }
}
class DocumentFactory {
    constructor(prototype) {
        this.prototype = prototype;
    }

    cloneDocument() {
        return this.prototype.clone();
    }
}

function main() {

    const original = new Document(
        "JavaScript darslari",
        "JavaScript dasturlash tilini o'rganish",
        "Adham",
        ["JavaScript", "Programming", "IT"]
    );

    const factory = new DocumentFactory(original);

    const copy1 = factory.cloneDocument();
    const copy2 = factory.cloneDocument();

    copy1.title = "HTML va CSS";
    copy1.content = "HTML va CSS darslari";
    copy1.tags.push("Frontend");

    copy2.title = "React darslari";
    copy2.content = "React kutubxonasini o'rganish";
    copy2.tags.push("React");

    console.log("ORIGINAL HUJJAT:");
    original.showInfo();

    console.log("BIRINCHI NUSXA:");
    copy1.showInfo();

    console.log("IKKINCHI NUSXA:");
    copy2.showInfo();
}


