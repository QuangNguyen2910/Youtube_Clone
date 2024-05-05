let videosContainer = document.getElementById('videos-container');
let videoCard = "";

fetch("assets/videos.json")
.then(response => response.json())
.then(videos => {
    // console.log(videos);

    videos.forEach(video => {
        videoCard += `
        <div class="flex flex-row space-y-3 cursor-pointer">
        <!-- thumbnail -->
        <a href="${video.videoURL}">
            <div class="relative h-52 sm:h-36 w-fifty">
            <img class="relative h-full w-fifty object-cover" src="${video.thumbnail}" alt="" draggable="false">
            <span class="absolute right-1 bottom-1 p-0.5 px-1 rounded-sm bg-black text-white text-xs bg-opacity-70">${video.duration}</span>
            </div>
        </a>
        <!-- video details -->
        <div class="flex flex-col flex-auto space-y-1.5 mb-3">

        <div class="flex items-center space-x-3">
            <!-- channel logo -->
            <div class="flex items-start">
            <a href="${video.videoURL}" class="text-sm2 text-bold text-white pr-1">${video.desc.title}</a>
            <i class="material-icons text-white md-21">more_vert</i>
            </div>
        </div>

        <!-- channel link and meta data -->
        <div class="flex flex-col pl-1 sm:pl-0" style="margin-top: 1rem;">
            <a href="${video.desc.channelURL}" class="text-gray-400 text-sm hover:text-white">${video.desc.channelName}</a>
            <div class="flex space-x-1">
                <span class="text-sm text-gray-400">${video.desc.views} views</span>
                <span class="text-sm text-gray-400">• ${video.desc.published} ago</span>
            </div>
        </div>
        </div>
    </div>`
    });
    videosContainer.innerHTML = videoCard;
})

function toggleMenu() {
    let sidebar_status = document.getElementById('sideBar').style.display;
    if (sidebar_status === 'none' || sidebar_status === '') {
        document.getElementById('sideBar').style.display = 'block';
        document.getElementById('stupid_class_name').style.marginLeft = '15rem';
        document.getElementById('stupid_class_name').style.width = '80%';
    } else {
        document.getElementById('sideBar').style.display = 'none';
        document.getElementById('stupid_class_name').style.marginLeft = '0rem';
        document.getElementById('stupid_class_name').style.width = '100%';
    }
}