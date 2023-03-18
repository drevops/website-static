# Marketing website for DrevOps
Drupal website template with integrations

https://www.drevops.com

## Maintenance

The page is published automatically once changes are pushed.

### Compile site locally

https://help.github.com/en/enterprise/2.14/user/articles/setting-up-your-github-pages-site-locally-with-jekyll

1. Install Ruby
2. Install Bundler
   ``` 
    gem install bundler
   ```
3. Build and serve site:
   ```
   cd docs
   bundle install
   bundle exec jekyll serve
   ```
4. Access site at http://127.0.0.1:4000/

### Check spelling.

Run `./scripts/check-spell.sh`
