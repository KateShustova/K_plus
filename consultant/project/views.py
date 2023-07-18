from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import json


def index_page(request):
    with open('project/questions_phys.json', encoding='utf-8') as qustion_file:
        question_phys_list = json.loads(qustion_file.read())['questions']

    with open('project/questions_legal.json', encoding='utf-8') as qustion_file:
        question_legal_list = json.loads(qustion_file.read())['questions']
        
    with open('project/documents.json', encoding='utf-8') as document_file:
        document_list = json.loads(document_file.read())['documents']

    paginator_legal = Paginator(question_legal_list, len(question_legal_list))
    page_num_legal = request.GET.get('page', 1)

    paginator_phys = Paginator(question_phys_list, len(question_phys_list))
    page_num_phys = request.GET.get('page', 1)

    try:
        page_obj_legal = paginator_legal.page(page_num_legal)
        page_obj_phys = paginator_phys.page(page_num_phys)
    except PageNotAnInteger:
        # if page is not an integer, deliver the first page
        page_obj_legal = paginator_legal.page(1)
        page_obj_phys = paginator_phys.page(1)
    except EmptyPage:
        # if the page is out of range, deliver the last page
        page_obj_legal = paginator_legal.page(page_num_legal)
        page_obj_phys = paginator_phys.page(page_num_phys)

    return render(request, 'index.html', {'page_obj_legal': page_obj_legal, 'page_obj_phys': page_obj_phys, 'docs': document_list})
