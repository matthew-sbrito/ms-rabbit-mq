print("Started Adding the Users.");
db = db.getSiblingDB("sales");
db.createUser({
    user: "userx",
    pwd: "1234",
    roles: [{ role: "readWrite", db: "admin" }],
});
print("End Adding the User Roles.");