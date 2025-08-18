from pytubefix import YouTube
from pytubefix.cli import on_progress

url1 = "https://www.youtube.com/watch?v=rXnNpqtEB9w"
url2 = "https://www.youtube.com/watch?v=wehrI5AAxWk"

yt = YouTube(url1, on_progress_callback=on_progress)
print(yt.title)

ys = yt.streams.get_highest_resolution()
ys.download()




# merge the two videos