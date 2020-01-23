import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(articles: any, searchText: any): any {
    if (searchText == null || searchText === undefined) { return articles; }

    return articles.filter( article => article.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1

    );
  }

}
