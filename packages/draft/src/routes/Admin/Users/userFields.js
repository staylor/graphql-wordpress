export default [
  { label: 'Name', prop: 'name', editable: true },
  { label: 'Email', prop: 'email', type: 'email', editable: true },
  {
    label: 'bio',
    prop: 'bio',
    type: 'textarea',
    editable: true,
  },
  {
    label: 'Roles',
    prop: 'roles',
    type: 'select',
    placeholder: 'Assign Roles',
    choices: [{ label: 'Admin', value: 'admin' }],
    multiple: true,
    editable: true,
  },
];
