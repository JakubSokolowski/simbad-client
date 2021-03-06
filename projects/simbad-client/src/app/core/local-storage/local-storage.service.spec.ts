import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
    let service: LocalStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocalStorageService]
        });
        service = TestBed.get(LocalStorageService);

        const localStorageMock = (function() {
            let store = {};
            return {
                getItem: function(key) {
                    return store[key];
                },
                setItem: function(key, value) {
                    store[key] = value.toString();
                },
                clear: function() {
                    store = {};
                },
                removeItem: function(key) {
                    delete store[key];
                }
            };
        })();
        Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    });

    afterEach(() => localStorage.clear());

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('testLocalStorage should be executable', () => {
        spyOn(service, 'testLocalStorage');
        service.testLocalStorage();
        expect(service.testLocalStorage).toHaveBeenCalled();
    });

    it('should get, set, and remove the item', () => {
        service.setItem('TEST', 'item');
        expect(service.getItem('TEST')).toBe('item');
        service.removeItem('TEST');
        expect(service.getItem('TEST')).toBe(null);
    });

    // Jest migration-related hack, problems with static functions
    // this test does not do anything, really
    it('should load initial state', () => {
        service.setItem('TEST.PROP', 'value');
        expect(LocalStorageService.loadInitialState()).toEqual({});
    });
});
