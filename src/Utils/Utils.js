import _ from 'lodash';
import moment from 'moment';

export function groupDay(data) {
    return _.groupBy(data, function (item) {
        return moment(item.reviewCreated).startOf('day').format('dddd, MMMM Do, YYYY');
    });
}
export function groupweek(data) {
    return _.groupBy(data, function (item) {
        return moment(item.reviewCreated).isoWeek();
    });
}
export function groupmonth(data) {
    return _.groupBy(data, function (item) {
        return moment(item.reviewCreated).startOf('month').format('MMMM , YYYY');
    });
}

export function filterGroupedReviews(arrayOfElements, key) {
    
    let filteredArrayItem;
    var filteredArray = [];
     _.filter(arrayOfElements,(element) => {
        filteredArrayItem =   _.filter(element,subElement => subElement.content.includes(key));
        filteredArray.push(filteredArrayItem);
        });
    return filteredArray;
}

export function filterReviews(arrayOfElements, key) {

    let filteredArray = arrayOfElements.filter((element) => {
        return element.content.includes(key);
    });

    return filteredArray;
}

