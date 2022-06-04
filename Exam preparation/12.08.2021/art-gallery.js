class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles - { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (articleModel.toLowerCase() == 'picture' ||
            articleModel.toLowerCase() == 'photo' ||
            articleModel.toLowerCase() == 'item') {
            let exists = false;
            for (let i = 0; i < this.listOfArticles.length; i++) {
                if (this.listOfArticles[i]['articleName'] == articleName && this.listOfArticles[i]['articleModel']) {
                    this.listOfArticles[i]['quantity'] += quantity; exists = true; break;
                }
            }
            if (!exists) { this.listOfArticles.push({ "articleModel": articleModel.toLowerCase(), articleName, quantity }) }
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
        else { throw new Error("This article model is not included in this gallery!") }
    }

    inviteGuest(guestName, personality) {
        let exists = false;
        for (let i = 0; i < this.guests.length; i++) {
            if (this.guests[i]['guestName'] == guestName) {
                exists = true; throw new Error(`${guestName} has already been invited.`);
            }
        }
        if (!exists) {
            if (personality == 'Vip') { this.guests.push({ 'guestName': guestName, 'points': 500, 'purchaseArticle': 0 }) }
            else if (personality == 'Middle') { this.guests.push({ 'guestName': guestName, 'points': 250, 'purchaseArticle': 0 }) }
            else { this.guests.push({ 'guestName': guestName, 'points': 50, 'purchaseArticle': 0 }) }
            return `You have successfully invited ${guestName}!`
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        let exists = false;
        let currentArticle = {}
        for (let i = 0; i < this.listOfArticles.length; i++) {
            if (this.listOfArticles[i]['articleName'] == articleName && this.listOfArticles[i]['articleModel'] == articleModel) {
                exists = true; currentArticle = this.listOfArticles[i];
                if (this.listOfArticles[i]['quantity'] == 0) { return `The ${articleName} is not available.` }
                break;
            }
        }
        if (!exists) { throw new Error("This article is not found."); }
        let existsGuest = false;
        let currentGuest = {};
        let modelPoints = 0;
        if (articleModel == 'picture') { modelPoints = 200 }
        else if (articleModel == "item") { modelPoints = 250 }
        else if (articleModel == "photo") { modelPoints = 50 }
        for (let i = 0; i < this.guests.length; i++) {
            if (this.guests[i]['guestName'] == guestName) {
                existsGuest = true; currentGuest = this.guests[i];
                let model = currentArticle['articleModel'];
                if (this.guests[i]['points'] < modelPoints) {
                    return `You need to more points to purchase the article.`
                }
                break;
            }
        }
        if(!existsGuest){return "This guest is not invited."}

        currentGuest.points -= modelPoints;
        currentGuest.purchaseArticle += 1;
        currentArticle.quantity -= 1;
        return `${guestName} successfully purchased the article worth ${modelPoints} points.`
    }

    showGalleryInfo(criteria) {
        let output = '';
        if (criteria == 'article') {
            output += "Articles information:\n"
            this.listOfArticles.forEach(e => output += `${e.articleModel} - ${e.articleName} - ${e.quantity}\n`)
        }
        else if (criteria == 'guest') {
            output += "Guests information:\n"
            this.guests.forEach(e => output += `${e.guestName} - ${e.purchaseArticle}\n`)
        }
        return output.trim();
    }


}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.addArticle('item', 'Ancient vase', 2);
artGallery.addArticle('item', 'zz vase', 1);

artGallery.listOfArticles.forEach(e=>console.log(e));

artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.inviteGuest('Johnn', 'zz');
artGallery.guests.forEach(e=>console.log(e));

console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));

console.log(artGallery.buyArticle('item', 'zz vase', 'zz'));
console.log(artGallery.buyArticle('item', 'zz vase', 'Peter'));




