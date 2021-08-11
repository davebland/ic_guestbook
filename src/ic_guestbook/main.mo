import Array "mo:base/Array";
import Int = "mo:base/Int";
import Time = "mo:base/Time";

actor {

    stable var entries : [(Text, Int)] = [];

    public func addEntry(newText : Text) : async Text {
        entries := Array.append(entries, [(newText, Time.now())]);
        return "Added " # newText #  " at " # Int.toText(Time.now()) # "!";
    };

    public func resetGuestBook() : async () {
        entries := [];
    };

    public query func getEntries() : async [(Text, Int)] { entries };
};
