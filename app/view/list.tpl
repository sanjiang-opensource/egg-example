<html>
    <head>
        <title>Hacker News</title>
        <link rel="stylesheet" href="/public/css/new.css" />
    </head>
    <body>
        <div class="news-view view">
            {% for item in list %}
                <div class="item">
                <a href="{{ item.url }}">{{ item.title }}</a>
                {{ helper.relativeTime(item.time)}}
                </div>
            {% endfor %}
        </div>
    </body>
</html>