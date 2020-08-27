import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.page.html',
  styleUrls: ['./nested-table.page.scss'],
})
export class NestedTablePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = this.load();

  load() {


    //   function format ( d ) {
    //     // `d` is the original data object for the row
    //     return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
    //         '<tr>'+
    //             '<td>Name</td>'+
    //             '<td>'+d.name+'</td>'+
    //         '</tr>'+
    //         '<tr>'+
    //             '<td>Position</td>'+
    //             '<td>'+d.position+'</td>'+
    //         '</tr>'+
    //         '<tr>'+
    //             '<td>Extension</td>'+
    //             '<td>'+d.position+'</td>'+
    //         '</tr>'+
    //     '</table>';
    // }

    // $(document).ready(function() {
    //     var table = $('#example').DataTable( {
    //         "ajax": "assets/company.txt",
    //         "columns": [
    //             {
    //                 "className":      'details-control',
    //                 "orderable":      false,
    //                 "data":           null,
    //                 "defaultContent": ''
    //             },
    //             { "data": "name" },
    //             { "data": "position" },
    //             { "data": "office" },
    //             { "data": "salary" }
    //         ],
    //         "order": [[1, 'asc']]
    //     } );

    //     // Add event listener for opening and closing details
    //     $('#example tbody').on('click', 'td.details-control', function () {
    //         var tr = $(this).closest('tr');
    //         var row = table.row( tr );

    //         if ( row.child.isShown() ) {
    //             // This row is already open - close it
    //             row.child.hide();
    //             tr.removeClass('shown');
    //         }
    //         else {
    //             // Open this row
    //             row.child( format(row.data()) ).show();
    //             tr.addClass('shown');
    //         }
    //     } );
    // } );





    // 2 solutions

    var childEditors = {};  // Globally track created chid editors
    jQuery(document).ready(function () {

      // Generate table ID
      function getTableId(level, uniqueData) {
        // level = child level.
        // uniqueData - unique data value in table.
        return level + '-' + uniqueData.replace(' ', '-'); // Replace sapces with dashes
      }

      // Return table with id generated from row's name field
      function format(rowData, tableId) {
        // rowData - data for the table.
        // tableId - unique table ID for child table.
        // This function just builds the table tag.
        return '<table id="' + tableId + '" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
          '</table>';

      }

      function genericChildData(table, childLevel, onclickClass, child_table) {
        // Add event listener for for main talbe to open and close first level child details
        $('#example tbody').on('click', onclickClass, function () {

          if (childLevel == 1) {
            var tr = $(this).closest('tr');
            var row: any = table.row(tr);
            var rowData = row.data();
          } else {
            var tr = $(this).parent();  // Get tr 
            var childTable = tr.parent().parent();   // Get the table - tbody > table
            var row: any = childTable.DataTable().row(tr);
            var rowData = row.data();
          }

          if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');

            // Destroy the Child Datatable
            $('#' + rowData.name.replace(' ', '-')).DataTable().destroy();
          } else {

            var id = getTableId(childLevel, rowData.name);

            // Open this row
            row.child(format(rowData, id)).show();

            if (childLevel != 3) {
              $('#' + id).DataTable({
                dom: "t",
                data: [rowData],
                columns: [
                  {
                    className: child_table,
                    title: '',
                    orderable: false,
                    data: null,
                    defaultContent: ''
                  },
                  { data: "name", title: 'Name' },
                  { data: "position", title: 'Position' },
                  { data: "extn", title: 'Extension' },
                ],
                //scrollY: '100px',
                // select: true,

              });
            }

            tr.addClass('shown');
          }
        });
      }



      // Main table
      var table = $('#example').DataTable({
        // ajax: "/ajax/objects.txt",
        processing: true,
        ajax: "/assets/company.txt",
        pageLength: 10,
        columns: [
          {
            className: 'details-control main-table',
            orderable: false,
            data: null,
            defaultContent: ''
          },
          { data: "name" },
          { data: "position" },
          { data: "office" },
          { data: "salary" }
        ],
        order: [[1, 'asc']],
      });

      genericChildData(table, 1, 'td.main-table', 'details-control child-table');
      genericChildData(table, 2, 'tr td.child-table', 'details-control child-child-table');
      genericChildData(table, 3, 'tr td.child-child-table', 'details-control child-child-child-table');
      genericChildData(table, 4, 'tr td.child-child-child-table', '');

    });

  }


}
