var currentTrack = 0;
        var playbackMode = 'listLoop'; // 默认的播放模式是列表循环

        function playPrevious() {
            if (playbackMode === 'shuffle') {
                currentTrack = Math.floor(Math.random() * tracks.length); // 随机选择一个音乐
            } else {
                currentTrack = (currentTrack - 1 + tracks.length) % tracks.length; // 播放上一个音乐
            }
            playTrack();
        }

        function playNext() {
            if (playbackMode === 'shuffle') {
                currentTrack = Math.floor(Math.random() * tracks.length); // 随机选择一个音乐
            } else {
                currentTrack = (currentTrack + 1) % tracks.length; // 播放下一个音乐
            }
            playTrack();
        }

        function playTrack() {
            var audioPlayer = document.getElementById('audio');
            audioPlayer.src = tracks[currentTrack].src;
            audioPlayer.play();
        }

        function setPlaybackMode(mode) {
            playbackMode = mode; // 设置播放模式
            // 更新按钮状态
            document.getElementById('singleLoop').classList.remove('active');
            document.getElementById('listLoop').classList.remove('active');
            document.getElementById('shuffle').classList.remove('active');
            document.getElementById(mode).classList.add('active');
        }

        // 音乐列表
        var tracks = [
            { src: 'music/music.mp3', title: '音乐1' },
            { src: 'music/1.mp3', title: '音乐2' },
            { src: 'music/2.mp3', title: '音乐3' },
            { src: 'music/4.mp3', title: '音乐1' },
            { src: 'music/5.mp3', title: '音乐2' },
            { src: 'music/6.mp3', title: '音乐3' },
            { src: 'music/7.mp3', title: '音乐1' },
            { src: 'music/8.mp3', title: '音乐2' },
            { src: 'music/9.mp3', title: '音乐3' },
            { src: 'music/10.mp3', title: '音乐1' },
            { src: 'music/11.mp3', title: '音乐2' },
            { src: 'music/12.mp3', title: '音乐3' },
            { src: 'music/13.mp3', title: '音乐1' },
            { src: 'music/14.mp3', title: '音乐2' },
            { src: 'music/15.mp3', title: '音乐3' },
            { src: 'music/16.mp3', title: '音乐1' },
            { src: 'music/17.mp3', title: '音乐2' },
            { src: 'music/18.mp3', title: '音乐3' },
            { src: 'music/19.mp3', title: '音乐1' },
            { src: 'music/20.mp3', title: '音乐2' },
            { src: 'music/18.mp3', title: '音乐3' },
            // 添加更多音乐...
        ];

        // 初始化播放第一首音乐
        playTrack();