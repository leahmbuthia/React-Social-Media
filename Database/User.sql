USE SocialMedia;
 CREATE TABLE Users(
    UserID VARCHAR (255)PRIMARY KEY,
    UserName VARCHAR (255),
    Email VARCHAR (255),
    Password VARCHAR (255),
    TagName VARCHAR (255),
    Location VARCHAR (255),
 )
INSERT INTO Users (UserID, UserName, Email, Password, TagName, Location)
VALUES 

    ('2', 'user2', 'user2@example.com', 'password2', 'Tag2', 'Location2'),
    ('3', 'user3', 'user3@example.com', 'password3', 'Tag3', 'Location3'),
    ('4', 'user4', 'user4@example.com', 'password4', 'Tag4', 'Location4'),
    ('5', 'user5', 'user5@example.com', 'password5', 'Tag5', 'Location5'),
    ('6', 'user6', 'user6@example.com', 'password6', 'Tag6', 'Location6'),
    ('7', 'user7', 'user7@example.com', 'password7', 'Tag7', 'Location7'),
    ('8', 'user8', 'user8@example.com', 'password8', 'Tag8', 'Location8');


 SELECT * FROM Users

 CREATE TABLE Post(
    PostID VARCHAR (255)PRIMARY KEY,
    UserID VARCHAR (255),
    Content VARCHAR (500),
    PostDate VARCHAR (255),
    Likes VARCHAR (500),
    Comments VARCHAR (500),

 )
 CREATE TABLE Comment(
    CommentID VARCHAR (255) PRIMARY KEY,
    PostID VARCHAR (255),
    UserID VARCHAR (255),
    Content VARCHAR (500),
    CommentDate VARCHAR (255),
 )
 CREATE TABLE FriendShip(
    FriendShipID VARCHAR (255) PRIMARY KEY,
    User1_ID VARCHAR (255),
    User2_ID VARCHAR (255),
    FriendShipDate VARCHAR (255),
 )
CREATE TABLE Photo(
    PhotoID VARCHAR (255) PRIMARY KEY,
    UserID VARCHAR (255),
    PhotoUrl VARCHAR (255),
    UploadDate VARCHAR (255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
)
INSERT INTO Photos (PhotoID, UserID, PhotoUrl, UploadDate)
VALUES ('1', 'userID_value', 'http://example.com/photo.jpg', '2024-02-08');
 SELECT * FROM Photos

 
CREATE TABLE  Tbl_Group(
    GroupID VARCHAR (255) PRIMARY KEY,
    GroupName VARCHAR (255),
    Description VARCHAR (500),
    CreatedDate VARCHAR (255),
) 
CREATE TABLE GroupMember(
    GroupMemberID VARCHAR (255) PRIMARY KEY,
 GroupID VARCHAR (255),
 UserID VARCHAR (255),
)
CREATE TABLE Event(
    EventsID VARCHAR (255) PRIMARY KEY,
    EventName VARCHAR (255),
    Description VARCHAR (500),
    EventDate VARCHAR (255),
  Location VARCHAR (255),
  EventPoster VARCHAR (255),
)
CREATE TABLE EventAttendee(
    EventAttendeeID VARCHAR (255)PRIMARY KEY,
    UserID VARCHAR (255),
    EventsID VARCHAR (255),
)
CREATE TABLE Message(
    MessageID VARCHAR (255) PRIMARY KEY,
    SenderID VARCHAR (255) ,
    ReceiverID VARCHAR (255),
    MessageDate VARCHAR (255),
    Content VARCHAR (500),
    FOREIGN KEY (SenderID) REFERENCES Users(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES Users(UserID),

)
UPDATE Users
SET 
    UserName = CASE UserID
                    WHEN '2' THEN 'Timothy'
                    WHEN '3' THEN  'Ken'
                    WHEN '4' THEN 'Jack'
                    WHEN '5' THEN 'Steve'
                    WHEN '6' THEN 'Leah'
                    WHEN '7' THEN 'Marion'
                    WHEN '8' THEN 'Jane'
                    ELSE UserName
               END,
    Email = CASE UserID
                WHEN '2' THEN 'timothy@gmail.com'
                WHEN '3' THEN 'ken@gmail.com'
                WHEN '4' THEN 'Jack@gmail.com'
                WHEN '5' THEN 'Steve@gmail.com'
                WHEN '6' THEN 'Leah@gmail.com'
                WHEN '7' THEN 'Marion@gmail.com'
                WHEN '8' THEN 'Jane@gmail.com'
                ELSE Email
            END,
    Password = CASE UserID
                    WHEN '2' THEN 'Timothy1'
                    WHEN '3' THEN 'Ken1'
                    WHEN '4' THEN 'Jack1'
                    WHEN '5' THEN 'Steve1'
                    WHEN '6' THEN 'Leah1'
                    WHEN '7' THEN 'Marion1'
                    WHEN '8' THEN 'Jane1'
                    ELSE Password
               END,
    TagName = CASE UserID
                    WHEN '2' THEN '@timothy'
                    WHEN '3' THEN '@ken'
                    WHEN '4' THEN '@jack'
                    WHEN '5' THEN '@steve'
                    WHEN '6' THEN '@leah'
                    WHEN '7' THEN '@marion'
                    WHEN '8' THEN '@jane'
                    ELSE TagName
               END,
    Location = CASE UserID
                    WHEN '2' THEN 'Kiambu'
                    WHEN '3' THEN 'Kericho'
                    WHEN '4' THEN 'Nyandarua'
                    WHEN '5' THEN 'Machakos'
                    WHEN '6' THEN 'Nyeri'
                    WHEN '7' THEN 'Eldoret'
                    WHEN '8' THEN 'Kisii'
                    ELSE Location
               END
WHERE UserID IN ('2', '3', '4', '5', '6', '7', '8');

INSERT INTO Posts (PostID, UserID, Content, PostDate, Likes, Comments)
VALUES 
    ('1', '2', 'Content Friends', '2024-02-09', '10', '5'),
    ('2', '3', 'Content content timelines', '2024-02-09', '15', '8'),
    ('3', '4', 'Content photos content', '2024-02-08', '20', '12'),
    ('4', '5', 'Content Videos content ', '2024-02-08', '25', '6'),
    ('5', '6', 'Content Events', '2024-02-07', '30', '10');
   
SELECT * FROM Posts

INSERT INTO Comments (CommentID, PostID, UserID, Content, CommentDate)
VALUES 
    ('1', '1', '1', 'This is a comment on post 1', '2024-02-09'),
    ('2', '1', '2', 'Another comment on post 1', '2024-02-09'),
    ('3', '2', '3', 'Comment on post 2', '2024-02-08');

    SELECT * FROM Comments

    DROP TABLE Photos
    
    DROP TABLE Posts
    
    DROP TABLE Comments
    
    DROP TABLE Groups
    
    DROP TABLE GroupMembers
    
    DROP TABLE Events
    
    DROP TABLE Messages