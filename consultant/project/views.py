from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from project.models import Poll
import json


def index_page(request):
    with open('project/test.json') as user_file:
        object_list = json.loads(user_file.read())['questions']

    paginator = Paginator(object_list, len(object_list))  # 3 employees per page
    page_num = request.GET.get('page', 1)

    try:
        page_obj = paginator.page(page_num)
    except PageNotAnInteger:
        # if page is not an integer, deliver the first page
        page_obj = paginator.page(1)
    except EmptyPage:
        # if the page is out of range, deliver the last page
        page_obj = paginator.page(paginator.num_pages)

    return render(request, 'index.html', {'page_obj': page_obj})
