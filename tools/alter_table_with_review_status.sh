psql -d benvoices << EOF
 ALTER TABLE placements_teaser_data ADD COLUMN review_status BOOLEAN DEFAULT FALSE;
EOF
