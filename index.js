const createNewComment = (commentInfo) => {
    return `
        <div class="comment">
            <div class="channel-logo-container">
                <img class="channel-logo" src="${commentInfo.authorPic}" alt="channel-logo">
            </div>

            <div class="comment-metadata">
                <div class="comment-top-bar">
                    <div class="comment-channel-name">
                        ${commentInfo.authorName}
                    </div>
                    <div class="comment-age">
                        ${commentInfo.age}
                    </div>
                </div>
                
                <div class="comment-text">
                    ${commentInfo.content}
                </div>

                <div class="comment-bottom-bar">
                    <div class="center-icon">
                        <i class="material-icons icon small-icon" id="like-icon">thumb_up_off_alt</i>
                    </div>
                    
                    <span class="like-count">${commentInfo.likeCount}</span>
                    <i class="material-icons icon small-icon" id="dislike-icon">thumb_down_off_alt</i>
                    <div class="comment-reply-btn">
                        REPLY
                    </div>
                </div>
            </div>
            
            <div></div>
        </div>
    `
}

let comments = [
    {
        authorPic: "assets/nah.jpeg",
        authorName: "nah",
        age: "5 months ago",
        content: "she's so talented",
        likeCount: 22,
    },
    {
        authorPic: "assets/LeBeautiful.jpeg",
        authorName: "LeBeautiful",
        age: "3 months ago",
        content: "glad to be a fan now, she's definitely gonna go places! 나는 팬이다!",
        likeCount: 6,
    },
    {
        authorPic: "assets/紙短情長.jpeg",
        authorName: "紙短情長",
        age: "2 months ago",
        content: "It’s gonna lit I swear 🤤❤️‍🔥❤️‍🔥",
        likeCount: 1,
    },
    {
        authorPic: "assets/Last KiNG.jpeg",
        authorName: "Last KiNG",
        age: "2 months ago",
        content: "OSSHite! Fake is my fave on this playlist 🔥🔥",
        likeCount: 1,
    },
    {
        authorPic: "assets/Gray Syu.jpeg",
        authorName: "Gray Syu",
        age: "4 months ago",
        content: "她的聲音真的很好聽",
        likeCount: 7,
    },
    {
        authorPic: "assets/sarah lol.jpeg",
        authorName: "sarah lol",
        age: "4 months ago",
        content: "I LOVE HER",
        likeCount: 2,
    },
    {
        authorPic: "assets/nah.jpeg",
        authorName: "nah",
        age: "5 months ago",
        content: "she's so talented",
        likeCount: 22,
    },
    {
        authorPic: "assets/LeBeautiful.jpeg",
        authorName: "LeBeautiful",
        age: "3 months ago",
        content: "glad to be a fan now, she's definitely gonna go places! 나는 팬이다!",
        likeCount: 6,
    },
    {
        authorPic: "assets/紙短情長.jpeg",
        authorName: "紙短情長",
        age: "2 months ago",
        content: "It’s gonna lit I swear 🤤❤️‍🔥❤️‍🔥",
        likeCount: 1,
    },
    {
        authorPic: "assets/Last KiNG.jpeg",
        authorName: "Last KiNG",
        age: "2 months ago",
        content: "OSSHite! Fake is my fave on this playlist 🔥🔥",
        likeCount: 1,
    },
    {
        authorPic: "assets/Gray Syu.jpeg",
        authorName: "Gray Syu",
        age: "4 months ago",
        content: "她的聲音真的很好聽",
        likeCount: 7,
    },
    {
        authorPic: "assets/sarah lol.jpeg",
        authorName: "sarah lol",
        age: "4 months ago",
        content: "I LOVE HER",
        likeCount: 2,
    },
]

let commentSection = document.querySelector(".comment-section")

for (let i in comments) {
    let comment = createNewComment(comments[i])
    commentSection.insertAdjacentHTML("beforeend", comment)
}

