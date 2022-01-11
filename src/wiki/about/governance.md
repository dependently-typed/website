# Governance

We have a board that helps to manage and run the club. However, the club is all about the community and major decisions are driven through community deliberation.

## Titles

- Director
- Operations
- Treasurer
- Communications

## History

Founder: {{ board.founder }}

{% for semester in board.semesters %}
### {{ semester.name }}
<ul>
{% for item in semester.board %}
<li><span>{{ item[0] }}: {{ item[1] }}</span></li>
{% endfor %}
</ul>
{% endfor %}


## Contacts

<ul>
{% for member in board.members %}
<li><span>{{ member[0] }} ({% for item in member[1] %}<a href="{{item[1]}}">{{item[0]}}</a> {% endfor %})</span></li>
{% endfor %}
</ul>
