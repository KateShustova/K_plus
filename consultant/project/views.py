from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from project.models import Poll
import json


def index_page(request):
    with open('project/questions.json', encoding='utf-8') as qustion_file:
        question_list = json.loads(qustion_file.read())['questions']
        
    with open('project/documents.json', encoding='utf-8') as document_file:
        document_list = json.loads(document_file.read())['documents']

    paginator = Paginator(question_list, len(question_list)) 
    page_num = request.GET.get('page', 1)

    try:
        page_obj = paginator.page(page_num)
    except PageNotAnInteger:
        # if page is not an integer, deliver the first page
        page_obj = paginator.page(1)
    except EmptyPage:
        # if the page is out of range, deliver the last page
        page_obj = paginator.page(paginator.num_pages)

    return render(request, 'index.html', {'page_obj': page_obj, 'docs': document_list})
