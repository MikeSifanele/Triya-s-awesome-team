export default class toh {
    static numberOfHeroes = (): string => {return "/html/body/app-root/app-dashboard/div"};
    static heroButton = (): string => {return "/html/body/app-root/app-dashboard/div/a[1]"};
    static heroHeading = (): string => {return "/html/body/app-root/app-hero-detail/div/h2"}
    static heroId = (): string => {return "/html/body/app-root/app-hero-detail/div/div[1]"}
    static heroName = (): string => {return "//*[@id='hero-name']"}
    static heroNameLabel =(): string => "/html/body/app-root/app-hero-detail/div/div[2]";
    static heroesButton = (): string => {return "/html/body/app-root/nav/a[2]"};
    static heroesList = (): string => {return "/html/body/app-root/app-heroes/ul"};
    static deleteHero = (): string => {return "/html/body/app-root/app-heroes/ul/li[1]/button"};
    static newHeroName = (): string => "//*[@id='new-hero']";
    static addHeroButton = (): string => "/html/body/app-root/app-heroes/div/button";
    
    static heroesCount() {
        cy.xpath(this.numberOfHeroes()).then(($value) => {
            length = $value.length;
            expect($value).to.have.length(length);
        })
        cy.xpath(this.numberOfHeroes()).children().should('have.length', 4)  
    }

    static clickHeroButton() {
        cy.xpath(this.heroButton()).click();
    }

    static VerifyHeroHeading(expectedHeadingText:string){
        cy.xpath(this.heroHeading())
        .invoke('text')
        .then((txt)=> {
        expect(txt).to.contain(expectedHeadingText);
        }) // can try actual text BOMBASTO ...
    }
 
    static VerifyHeroID(idNumber:number){
        cy.xpath(this.heroId())
        .invoke('text')
        .then((txt)=> {
        expect(txt).to.contain(idNumber)})
    }
    
    static VerifyHeroLabel(){
        cy.xpath(this.heroNameLabel()).should('be.visible');
    }

    static verifyHeroName(heroName:string) {
        cy.xpath(this.heroName()).should('have.value', heroName)
    }

    static verifyHeroDetail() {
        this.VerifyHeroHeading('BOMBASTO Details');
        this.VerifyHeroID(13);
        this.VerifyHeroLabel();
        this.verifyHeroName('Bombasto');
    }

    static clickHeroesButton() {
        cy.xpath(this.heroesButton()).click();
    }

    static allHeroesCount() {
        cy.xpath(this.heroesList()).then(($value) => {
            length = $value.length;
            expect($value).to.have.length(length);
        })
        cy.xpath(this.heroesList()).children().should('have.length', 9)  
    }

    static deleteHeroCountDecrease() {
        //delete
        cy.xpath(this.deleteHero()).click();
        
        //new length
        cy.xpath(this.heroesList()).then(($value) => {
            length = $value.length;
            expect($value).to.have.length(length);
        })
        cy.xpath(this.heroesList()).children().should('have.length', 8)  
    }

    static addNewHero(heroName: string){
        cy.xpath(this.newHeroName()).click();

        cy.xpath(this.newHeroName()).type(heroName);

        cy.xpath(this.addHeroButton()).click();

        cy.xpath(this.heroesList()).then(($value) => {
            length = $value.length;
            expect($value).to.have.length(length);
        });

        cy.xpath(this.heroesList()).children().should('have.length', 10)
    }

    static addHeroWithNoName(){
        cy.xpath(this.addHeroButton()).click();
    }

    static checkHeroesCount(length: number){
        cy.xpath(this.heroesList()).then(($value) => {
            length = $value.length;
            expect($value).to.have.length(length);
        });

        cy.xpath(this.heroesList()).children().should('have.length', length);
    }
}