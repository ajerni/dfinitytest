actor {
   
   stable var wert : Text = "Mein initial Wert."; //stable erhält den aktuelln Wert im canister bei upgrade

    let myText = " ...has been saved.";

    public func getWert() : async Text { return wert };

    public func setWert(newwert : Text) : async Text{
        wert := newwert; // := um mutable var anzupassen --> dfx canister call hello setWert '("Mein Text")'
        return wert # myText;
    };

    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };
};
