var IndexViewModel = (function () {
    function IndexViewModel() {
        this.test = ko.observable(12);
    }
    return IndexViewModel;
})();

ko.applyBindings(new IndexViewModel());
//# sourceMappingURL=index.js.map
